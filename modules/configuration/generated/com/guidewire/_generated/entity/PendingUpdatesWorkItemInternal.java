package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingUpdatesWorkItem.eti;PendingUpdatesWorkItem.eix;PendingUpdatesWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingUpdatesWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PendingUpdatesWorkItem getSubtype();
  
  
  /**
   * Gets the value of the Target field.
   * Reference to the account-level entity that contains a set of pending updates that need to be applied.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getTarget();
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PendingUpdatesWorkItem value);
  
  
  /**
   * Sets the value of the Target field.
   */
  public void setTarget(java.lang.Long value);
  
  
  
}