/// <reference types="../CTAutocomplete/asm" />
/// <reference lib="es2015" />
/**@param {IASM} ASM */
export default (ASM) => {
  const { desc, BOOLEAN, OBJECT, JumpCondition } = ASM;

  ASM.injectBuilder(
    "net/minecraft/client/renderer/ItemRenderer",
    "renderFireInFirstPerson",
    desc("V", "F"),
    ASM.At(ASM.At.HEAD)
  )
    .methodMaps({
      func_78442_d: "renderFireInFirstPerson",
    })
    .instructions(($) => {
      $.array(0, OBJECT, ($) => {}).invokeJS("toggleFire");
      $.checkcast(BOOLEAN).invokeVirtual(BOOLEAN, "booleanValue", desc("Z"));
      $.ifClause([JumpCondition.FALSE], ($) => {
        $.methodReturn();
      });
    })
    .execute();
};
