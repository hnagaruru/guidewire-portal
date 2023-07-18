package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OfficialIDValidationInfo.eti;OfficialIDValidationInfo.eix;OfficialIDValidationInfo.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OfficialIDValidationInfoInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire.pc.domain.policy.lines.all.OfficialIDValidationInfoPublicMethods {
  /**
   * Adds the given element to the IDFormatError_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIDFormatError_L10N_ARRAY(entity.OfficialIDValidationInfo_IDFormatError_L10N element);
  
  
  /**
   * Gets the value of the IDFormat field.
   * Regular expression that defines the valid format for this ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIDFormat();
  
  
  /**
   * Gets the value of the IDFormatError field.
   * Error to display when format is violated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIDFormatError();
  
  
  /**
   * Gets the value of the IDFormatError_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OfficialIDValidationInfo_IDFormatError_L10N[] getIDFormatError_L10N_ARRAY();
  
  
  /**
   * Array association for partition IDFormatError_L10N_ARRAYByLanguage on array IDFormatError_L10N_ARRAY
   */
  public entity.OfficialIDValidationInfo_IDFormatError_L10N getIDFormatError_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the OfficialIDType field.
   * Official ID type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OfficialIDType getOfficialIDType();
  
  
  /**
   * Gets the value of the OfficialIdRequiredType field.
   * Is ID required, or optional
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OfficialIdRequiredType getOfficialIdRequiredType();
  
  
  /**
   * Gets the value of the State field.
   * State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState();
  
  
  /**
   * Removes the given element from the IDFormatError_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromIDFormatError_L10N_ARRAY(entity.OfficialIDValidationInfo_IDFormatError_L10N element);
  
  
  /**
   * Removes the given element from the IDFormatError_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIDFormatError_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the IDFormat field.
   */
  public void setIDFormat(java.lang.String value);
  
  
  /**
   * Sets the value of the IDFormatError field.
   */
  public void setIDFormatError(java.lang.String value);
  
  
  /**
   * Sets the value of the IDFormatError_L10N_ARRAY field.
   */
  public void setIDFormatError_L10N_ARRAY(entity.OfficialIDValidationInfo_IDFormatError_L10N[] value);
  
  
  /**
   * Sets the value of the OfficialIDType field.
   */
  public void setOfficialIDType(typekey.OfficialIDType value);
  
  
  /**
   * Sets the value of the OfficialIdRequiredType field.
   */
  public void setOfficialIdRequiredType(typekey.OfficialIdRequiredType value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value);
  
  
  
}