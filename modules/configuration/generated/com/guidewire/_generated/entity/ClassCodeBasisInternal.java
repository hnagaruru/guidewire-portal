package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ClassCodeBasis.eti;ClassCodeBasis.eix;ClassCodeBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ClassCodeBasisInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.ClassCodeBasis_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.ClassCodeBasis_Name_L10N element);
  
  
  /**
   * Gets the value of the Code field.
   * Code number of the Basis Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClassCodeBasis_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.ClassCodeBasis_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * Name of the Basis Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClassCodeBasis_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.ClassCodeBasis_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the RateFactor field.
   * Rating Factor Multiplier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRateFactor();
  
  
  /**
   * Gets the value of the Auditable field.
   * Defines whether the basis is considered a fixed number (like square feet of office space) or a variable (auditable) value that will only be known after the policy period is completed (like total sales or total payroll). True indicates a variable value. The system will treat variable values differently from fixed values. Most notably, when splitting an exposure in General Liability or Workers Comp, the system will divide variable amounts pro rata between the 2 split pieces (i.e. dividing payroll between the 2 date ranges). For a fixed basis, the system will copy the same basis to both split pieces (i.e. the office space is usually the same size during both date ranges).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAuditable();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.ClassCodeBasis_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.ClassCodeBasis_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Auditable field.
   */
  public void setAuditable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.ClassCodeBasis_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.ClassCodeBasis_Name_L10N[] value);
  
  
  /**
   * Sets the value of the RateFactor field.
   */
  public void setRateFactor(java.math.BigDecimal value);
  
  
  
}