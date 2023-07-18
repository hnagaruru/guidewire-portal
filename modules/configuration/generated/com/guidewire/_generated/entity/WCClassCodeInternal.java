package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCClassCode.eti;WCClassCode.eix;WCClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCClassCodeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Adds the given element to the Classification_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClassification_L10N_ARRAY(entity.WCClassCode_Classification_L10N element);
  
  
  /**
   * Adds the given element to the ShortDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToShortDesc_L10N_ARRAY(entity.WCClassCode_ShortDesc_L10N element);
  
  
  /**
   * Gets the value of the Basis field.
   * Rating basis for this class code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClassCodeBasis getBasis();
  
  
  public gw.pl.persistence.core.Key getBasisID();
  
  
  /**
   * Gets the value of the ClassIndicator field.
   * The Class Indicator for the class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassIndicator();
  
  
  /**
   * Gets the value of the Classification field.
   * The Classification of the code (essentially a short description)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassification();
  
  
  /**
   * Gets the value of the Classification_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode_Classification_L10N[] getClassification_L10N_ARRAY();
  
  
  /**
   * Array association for partition Classification_L10N_ARRAYByLanguage on array Classification_L10N_ARRAY
   */
  public entity.WCClassCode_Classification_L10N getClassification_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Code field.
   * The Class Code for a line of insurance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the ShortDesc field.
   * short classifcation description for listviews
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getShortDesc();
  
  
  /**
   * Gets the value of the ShortDesc_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode_ShortDesc_L10N[] getShortDesc_L10N_ARRAY();
  
  
  /**
   * Array association for partition ShortDesc_L10N_ARRAYByLanguage on array ShortDesc_L10N_ARRAY
   */
  public entity.WCClassCode_ShortDesc_L10N getShortDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the WCDomain field.
   * The string value of the typecode representing the jurisdiction for which this class code value is allowed. For example, if this is a typecode allowed in the US state of California, the value should be 'CA'
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWCDomain();
  
  
  /**
   * Removes the given element from the Classification_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromClassification_L10N_ARRAY(entity.WCClassCode_Classification_L10N element);
  
  
  /**
   * Removes the given element from the Classification_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClassification_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ShortDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromShortDesc_L10N_ARRAY(entity.WCClassCode_ShortDesc_L10N element);
  
  
  /**
   * Removes the given element from the ShortDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromShortDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(entity.ClassCodeBasis value);
  
  
  public void setBasisID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassIndicator field.
   */
  public void setClassIndicator(java.lang.String value);
  
  
  /**
   * Sets the value of the Classification field.
   */
  public void setClassification(java.lang.String value);
  
  
  /**
   * Sets the value of the Classification_L10N_ARRAY field.
   */
  public void setClassification_L10N_ARRAY(entity.WCClassCode_Classification_L10N[] value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ShortDesc field.
   */
  public void setShortDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the ShortDesc_L10N_ARRAY field.
   */
  public void setShortDesc_L10N_ARRAY(entity.WCClassCode_ShortDesc_L10N[] value);
  
  
  /**
   * Sets the value of the WCDomain field.
   */
  public void setWCDomain(java.lang.String value);
  
  
  
}