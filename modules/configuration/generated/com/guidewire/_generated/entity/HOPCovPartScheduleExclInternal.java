package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleExcl.eti;HOPCovPartScheduleExcl.eix;HOPCovPartScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPCovPartScheduleExclInternal extends com.guidewire._generated.entity.HOPCoveragePartExclInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the HOPCovPartScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCovPartScheduledItems(entity.HOPCovPartSchExclItem element);
  
  
  /**
   * Gets the value of the HOPCovPartScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartSchExclItem[] getHOPCovPartScheduledItems();
  
  
  /**
   * Removes the given element from the HOPCovPartScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCovPartScheduledItems(entity.HOPCovPartSchExclItem element);
  
  
  /**
   * Removes the given element from the HOPCovPartScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCovPartScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPCovPartScheduledItems field.
   */
  public void setHOPCovPartScheduledItems(entity.HOPCovPartSchExclItem[] value);
  
  
  
}