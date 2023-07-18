package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClauseCategory.eti;APDClauseCategory.eix;APDClauseCategory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDClauseCategoryInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDClauseCategory_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDClauseCategory_Name_L10N element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The pattern code used in the product model definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the Coverable field.
   * The coverable to which this category belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDClauseCategory_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the category
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDClauseCategory_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Sequence field.
   * The sequence that coverage categories are displayed. Sequence no. 1 is assumed to be primary coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Hidden field.
   * Hidden categories do not list the coverages as these are "assumed" by the packaged cover; they may list conditions that provide common terms to the packaged covers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHidden();
  
  
  /**
   * Gets the value of the Itemised field.
   * If itemised, the clauses are listed in their own tab (in the given sequence), otherwise it is available for "library lookup". Only applies to categories of coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isItemised();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDClauseCategory_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDClauseCategory_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDClauseCategory_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Hidden field.
   */
  public void setHidden(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Itemised field.
   */
  public void setItemised(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDClauseCategory_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  
}