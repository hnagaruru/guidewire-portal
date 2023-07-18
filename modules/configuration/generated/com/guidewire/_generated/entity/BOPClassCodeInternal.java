package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPClassCode.eti;BOPClassCode.eix;BOPClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPClassCodeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire._generated.entity.AbstractBuildingClassCodeInternal {
  /**
   * Adds the given element to the Classification_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClassification_L10N_ARRAY(entity.BOPClassCode_Classification_L10N element);
  
  
  /**
   * Gets the value of the BOPLiabilityClassGroup field.
   * A value required by the rating engine for BOP.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBOPLiabilityClassGroup();
  
  
  /**
   * Gets the value of the BOPPropertyRateNumber field.
   * A value required by the rating engine for BOP.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBOPPropertyRateNumber();
  
  
  /**
   * Gets the value of the Basis field.
   * Rating basis for this class code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClassCodeBasis getBasis();
  
  
  public gw.pl.persistence.core.Key getBasisID();
  
  
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
  public entity.BOPClassCode_Classification_L10N[] getClassification_L10N_ARRAY();
  
  
  /**
   * Array association for partition Classification_L10N_ARRAYByLanguage on array Classification_L10N_ARRAY
   */
  public entity.BOPClassCode_Classification_L10N getClassification_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Removes the given element from the Classification_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromClassification_L10N_ARRAY(entity.BOPClassCode_Classification_L10N element);
  
  
  /**
   * Removes the given element from the Classification_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClassification_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BOPLiabilityClassGroup field.
   */
  public void setBOPLiabilityClassGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the BOPPropertyRateNumber field.
   */
  public void setBOPPropertyRateNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(entity.ClassCodeBasis value);
  
  
  public void setBasisID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Classification field.
   */
  public void setClassification(java.lang.String value);
  
  
  /**
   * Sets the value of the Classification_L10N_ARRAY field.
   */
  public void setClassification_L10N_ARRAY(entity.BOPClassCode_Classification_L10N[] value);
  
  
  
}