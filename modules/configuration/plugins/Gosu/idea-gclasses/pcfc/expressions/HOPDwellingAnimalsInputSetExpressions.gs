package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAnimalsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingAnimalsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAnimalsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingAnimalsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalType_Cell) at HOPDwellingAnimalsInputSet.pcf: line 44, column 47
    function sortValue_0 (animal :  entity.DwellingAnimal) : java.lang.Object {
      return animal.AnimalType
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalBreed_Cell) at HOPDwellingAnimalsInputSet.pcf: line 52, column 48
    function sortValue_1 (animal :  entity.DwellingAnimal) : java.lang.Object {
      return animal.AnimalBreed
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingAnimalsInputSet.pcf: line 67, column 53
    function sortValue_2 (animal :  entity.DwellingAnimal) : java.lang.Object {
      return animal.AdditionalInformation
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=AnimalsIterator) at HOPDwellingAnimalsInputSet.pcf: line 35, column 47
    function toCreateAndAdd_19 () : entity.DwellingAnimal {
      return dwelling.createAndAddDwellingAnimal()
    }
    
    // 'toRemove' attribute on RowIterator (id=AnimalsIterator) at HOPDwellingAnimalsInputSet.pcf: line 35, column 47
    function toRemove_20 (animal :  entity.DwellingAnimal) : void {
      dwelling.removeFromDwellingAnimals(animal)
    }
    
    // 'value' attribute on RowIterator (id=AnimalsIterator) at HOPDwellingAnimalsInputSet.pcf: line 35, column 47
    function value_21 () : entity.DwellingAnimal[] {
      return dwelling.DwellingAnimals
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getRequireValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setRequireValue("dwelling", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingAnimalsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPDwellingAnimalsInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=AnimalBiteHistory_Cell) at HOPDwellingAnimalsInputSet.pcf: line 61, column 36
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      animal.AnimalBiteHistory = (__VALUE_TO_SET as Boolean)
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingAnimalsInputSet.pcf: line 67, column 53
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      animal.AdditionalInformation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalType_Cell) at HOPDwellingAnimalsInputSet.pcf: line 44, column 47
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      animal.AnimalType = (__VALUE_TO_SET as typekey.AnimalType)
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalBreed_Cell) at HOPDwellingAnimalsInputSet.pcf: line 52, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      animal.AnimalBreed = (__VALUE_TO_SET as typekey.AnimalBreed)
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalType_Cell) at HOPDwellingAnimalsInputSet.pcf: line 44, column 47
    function valueRoot_5 () : java.lang.Object {
      return animal
    }
    
    // 'value' attribute on BooleanRadioCell (id=AnimalBiteHistory_Cell) at HOPDwellingAnimalsInputSet.pcf: line 61, column 36
    function value_11 () : Boolean {
      return animal.AnimalBiteHistory
    }
    
    // 'value' attribute on TextCell (id=AdditionalInformation_Cell) at HOPDwellingAnimalsInputSet.pcf: line 67, column 53
    function value_15 () : java.lang.String {
      return animal.AdditionalInformation
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalType_Cell) at HOPDwellingAnimalsInputSet.pcf: line 44, column 47
    function value_3 () : typekey.AnimalType {
      return animal.AnimalType
    }
    
    // 'value' attribute on TypeKeyCell (id=AnimalBreed_Cell) at HOPDwellingAnimalsInputSet.pcf: line 52, column 48
    function value_7 () : typekey.AnimalBreed {
      return animal.AnimalBreed
    }
    
    property get animal () : entity.DwellingAnimal {
      return getIteratedValue(1) as entity.DwellingAnimal
    }
    
    
  }
  
  
}