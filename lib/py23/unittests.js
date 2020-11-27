// python 2.x deprecated unittest method names with the correct ones in python 3.x
const methods = {
   failUnlessEqual:"assertEqual",
   assertEquals:"assertEqual",
   failIfEqual:"assertNotEqual",
   assertNotEquals:"assertNotEqual",
   failUnless:"assertTrue",
   assert_:"assertTrue",
   failIf:"assertFalse",
   failUnlessRaises:"assertRaises",
   failUnlessAlmostEqual:"assertAlmostEqual",
   assertAlmostEquals:"assertAlmostEqual",
   failIfAlmostEqual:"assertNotAlmostEqual",
   assertNotAlmostEquals:"assertNotAlmostEqual"
};
module.exports = {
  methods
}