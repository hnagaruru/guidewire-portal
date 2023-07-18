package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClaimCostCategory.eti;APDClaimCostCategory.eix;APDClaimCostCategory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDClaimCostCategoryInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDClaimCostCategory_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDClaimCostCategory_Name_L10N element);
  
  
  /**
   * Adds the given element to the RestrictedPerils array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRestrictedPerils(entity.APDClaimPeril element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The code used within the product model to identify this claim cost category
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the CostType field.
   * The type of claim cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCostType getCostType();
  
  
  /**
   * Gets the value of the Description field.
   * A description of the claim cost category
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClaimCostCategory_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDClaimCostCategory_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the claim cost category as displayed in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClaimCostCategory_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDClaimCostCategory_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the RestrictedPerils field.
   * The perils to which this cost is restricted; if empty it can be generally used for any claim against associated coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClaimPeril[] getRestrictedPerils();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDClaimCostCategory_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDClaimCostCategory_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RestrictedPerils array. This is achieved by marking the element for removal.
   */
  public void removeFromRestrictedPerils(entity.APDClaimPeril element);
  
  
  /**
   * Removes the given element from the RestrictedPerils array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRestrictedPerils(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the CostType field.
   */
  public void setCostType(typekey.APDCostType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDClaimCostCategory_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDClaimCostCategory_Name_L10N[] value);
  
  
  /**
   * Sets the value of the RestrictedPerils field.
   */
  public void setRestrictedPerils(entity.APDClaimPeril[] value);
  
  
  
}