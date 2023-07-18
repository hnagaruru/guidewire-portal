package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RenewalGroup.eti;RenewalGroup.eix;RenewalGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RenewalGroupInternal extends com.guidewire._generated.entity.JobGroupInternal, com.guidewire.pc.domain.job.group.RenewalGroupPublicMethods {
  /**
   * Adds the given element to the Renewals array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRenewals(entity.Renewal element);
  
  
  /**
   * Gets the value of the Renewals field.
   * The array of renewals in this renewal group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Renewal[] getRenewals();
  
  
  /**
   * Removes the given element from the Renewals array. This is achieved by marking the element for removal.
   */
  public void removeFromRenewals(entity.Renewal element);
  
  
  /**
   * Removes the given element from the Renewals array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRenewals(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Renewals field.
   */
  public void setRenewals(entity.Renewal[] value);
  
  
  
}