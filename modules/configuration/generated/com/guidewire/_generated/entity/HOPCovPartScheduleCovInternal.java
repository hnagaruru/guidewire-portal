package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCov.eti;HOPCovPartScheduleCov.eix;HOPCovPartScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPCovPartScheduleCovInternal extends com.guidewire._generated.entity.HOPCoveragePartCovInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the HOPCovPartScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCovPartScheduledItems(entity.HOPCovPartScheduleCovItem element);
  
  
  /**
   * Gets the value of the HOPCovPartScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartScheduleCovItem[] getHOPCovPartScheduledItems();
  
  
  /**
   * Removes the given element from the HOPCovPartScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCovPartScheduledItems(entity.HOPCovPartScheduleCovItem element);
  
  
  /**
   * Removes the given element from the HOPCovPartScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCovPartScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPCovPartScheduledItems field.
   */
  public void setHOPCovPartScheduledItems(entity.HOPCovPartScheduleCovItem[] value);
  
  
  
}