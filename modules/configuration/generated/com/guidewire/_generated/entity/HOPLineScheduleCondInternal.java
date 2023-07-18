package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCond.eti;HOPLineScheduleCond.eix;HOPLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineScheduleCondInternal extends com.guidewire._generated.entity.HOPLineCondInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the HOPLineScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineScheduledItems(entity.HOPLineScheduleCondItem element);
  
  
  /**
   * Gets the value of the HOPLineScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineScheduleCondItem[] getHOPLineScheduledItems();
  
  
  /**
   * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineScheduledItems(entity.HOPLineScheduleCondItem element);
  
  
  /**
   * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPLineScheduledItems field.
   */
  public void setHOPLineScheduledItems(entity.HOPLineScheduleCondItem[] value);
  
  
  
}