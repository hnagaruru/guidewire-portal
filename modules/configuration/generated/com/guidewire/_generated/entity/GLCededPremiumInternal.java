package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCededPremium.eti;GLCededPremium.eix;GLCededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCededPremiumInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Adds the given element to the CedingHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingHistory(entity.GLCededPremiumHistory element);
  
  
  /**
   * Adds the given element to the CedingTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCedingTransactions(entity.GLCededPremiumTransaction element);
  
  
  /**
   * Gets the value of the CedingHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCededPremiumHistory[] getCedingHistory();
  
  
  /**
   * Gets the value of the CedingTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCededPremiumTransaction[] getCedingTransactions();
  
  
  /**
   * Gets the value of the GLCost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCost getGLCost();
  
  
  public gw.pl.persistence.core.Key getGLCostID();
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingHistory(entity.GLCededPremiumHistory element);
  
  
  /**
   * Removes the given element from the CedingHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCedingTransactions(entity.GLCededPremiumTransaction element);
  
  
  /**
   * Removes the given element from the CedingTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCedingTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CedingHistory field.
   */
  public void setCedingHistory(entity.GLCededPremiumHistory[] value);
  
  
  /**
   * Sets the value of the CedingTransactions field.
   */
  public void setCedingTransactions(entity.GLCededPremiumTransaction[] value);
  
  
  /**
   * Sets the value of the GLCost field.
   */
  public void setGLCost(entity.GLCost value);
  
  
  public void setGLCostID(gw.pl.persistence.core.Key value);
  
  
  
}