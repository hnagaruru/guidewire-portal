package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BACost.eti;BACost.eix;BACost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BACostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.BATransaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BusinessAutoLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBusinessAutoLine();
  
  
  public gw.pl.persistence.core.Key getBusinessAutoLineID();
  
  
  /**
   * Gets the value of the BusinessVehicle field.
   * The Business Vehicle related to the this Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle getBusinessVehicle();
  
  
  public gw.pl.persistence.core.Key getBusinessVehicleID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The Jurisdiction related to the this Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getJurisdiction();
  
  
  public gw.pl.persistence.core.Key getJurisdictionID();
  
  
  /**
   * Gets the value of the RatedOrder field.
   * The order in which this cost was rated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BARatedOrderType getRatedOrder();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BACost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BATransaction[] getTransactions();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.BATransaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BACost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BusinessAutoLine field.
   */
  public void setBusinessAutoLine(entity.BusinessAutoLine value);
  
  
  public void setBusinessAutoLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BusinessVehicle field.
   */
  public void setBusinessVehicle(entity.BusinessVehicle value);
  
  
  public void setBusinessVehicleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BACost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(entity.BAJurisdiction value);
  
  
  public void setJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RatedOrder field.
   */
  public void setRatedOrder(typekey.BARatedOrderType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.BACost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.BATransaction[] value);
  
  
  
}