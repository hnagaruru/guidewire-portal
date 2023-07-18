package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RiskClass.eti;RiskClass.eix;RiskClass.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RiskClassInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.RiskClass_Description_L10N element);
  
  
  /**
   * Gets the value of the CoveragePatternCode field.
   * Coverage Pattern this applies to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoveragePatternCode();
  
  
  /**
   * Gets the value of the Description field.
   * The description of the Risk Class.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RiskClass_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.RiskClass_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Hazard field.
   * Hazard level of the risk class.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getHazard();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * Policy Line Pattern this code is valid for
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.RiskClass_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CoveragePatternCode field.
   */
  public void setCoveragePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.RiskClass_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Hazard field.
   */
  public void setHazard(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  
}