package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCoveredEmployee.eti;WCCoveredEmployee.eix;WCCoveredEmployee.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCoveredEmployeeInternal extends com.guidewire._generated.entity.WCCoveredEmployeeBaseInternal {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.WCCovEmpCost element);
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCovEmpCost[] getCosts();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.WCCovEmpCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.WCCovEmpCost[] value);
  
  
  
}