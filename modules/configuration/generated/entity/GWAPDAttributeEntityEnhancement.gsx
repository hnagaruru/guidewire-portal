package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "APDAttribute.eti;APDAttribute.eix;APDAttribute.etx")
enhancement GWAPDAttributeEntityEnhancement : entity.APDAttribute {
  function createAndAddTag (tagType :  typekey.APDTagType) : entity.APDRule {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).createAndAddTag(tagType)
  }
  
  property get AvailableTagTypes () : typekey.APDTagType[] {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).AvailableTagTypes
  }
  
  property get ContainerName () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).ContainerName
  }
  
  property get ShowDisplayValue () : java.lang.Boolean {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).ShowDisplayValue
  }
  
  property get TagDisplayValue () : java.lang.String {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).TagDisplayValue
  }
  
  property get TagRules () : entity.APDRule[] {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.model.APDTagContainer") as gw.apd.model.APDTagContainer).TagRules
  }
  
  
}