package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CostCode.eti;CostCode.eix;CostCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CostCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the CostName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostName_L10N_ARRAY(entity.CostCode_CostName_L10N element);
  
  
  /**
   * Gets the value of the ChargePatern field.
   * The pattern used to group costs into a charge to be collected
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ChargePattern getChargePatern();
  
  
  /**
   * Gets the value of the CostCode field.
   * The identifier (added to the cost key) that defines what this cost is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCostCode();
  
  
  /**
   * Gets the value of the CostName field.
   * The name of the cost as displayed on the screen
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCostName();
  
  
  /**
   * Gets the value of the CostName_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode_CostName_L10N[] getCostName_L10N_ARRAY();
  
  
  /**
   * Array association for partition CostName_L10N_ARRAYByLanguage on array CostName_L10N_ARRAY
   */
  public entity.CostCode_CostName_L10N getCostName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Description field.
   * Describes what the cost is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the ProrationMethod field.
   * The method of pro-rating short term (or long term) costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProrationMethod getProrationMethod();
  
  
  /**
   * Gets the value of the RateAmountType field.
   * The grouping for summary display of the quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getRateAmountType();
  
  
  /**
   * Gets the value of the Overrideable field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverrideable();
  
  
  /**
   * Removes the given element from the CostName_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromCostName_L10N_ARRAY(entity.CostCode_CostName_L10N element);
  
  
  /**
   * Removes the given element from the CostName_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ChargePatern field.
   */
  public void setChargePatern(typekey.ChargePattern value);
  
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CostName field.
   */
  public void setCostName(java.lang.String value);
  
  
  /**
   * Sets the value of the CostName_L10N_ARRAY field.
   */
  public void setCostName_L10N_ARRAY(entity.CostCode_CostName_L10N[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Overrideable field.
   */
  public void setOverrideable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ProrationMethod field.
   */
  public void setProrationMethod(typekey.ProrationMethod value);
  
  
  /**
   * Sets the value of the RateAmountType field.
   */
  public void setRateAmountType(typekey.RateAmountType value);
  
  
  
}