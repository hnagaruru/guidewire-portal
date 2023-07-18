package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCost.eti;WCCost.eix;WCCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.WCTransaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCost getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CalcOrder field.
   * The order in which this cost was rated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCalcOrder();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCCost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCTransaction[] getTransactions();
  
  
  /**
   * Gets the value of the WorkersCompLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine();
  
  
  public gw.pl.persistence.core.Key getWorkersCompLineID();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.WCTransaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCCost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CalcOrder field.
   */
  public void setCalcOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCCost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.WCCost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.WCTransaction[] value);
  
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value);
  
  
  public void setWorkersCompLineID(gw.pl.persistence.core.Key value);
  
  
  
}