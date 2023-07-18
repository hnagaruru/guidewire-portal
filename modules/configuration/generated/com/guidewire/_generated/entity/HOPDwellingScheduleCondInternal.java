package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleCond.eti;HOPDwellingScheduleCond.eix;HOPDwellingScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingScheduleCondInternal extends com.guidewire._generated.entity.HOPDwellingCondInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the HOPDwellScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellScheduledItems(entity.HOPDwellScheduleCondItem element);
  
  
  /**
   * Gets the value of the HOPDwellScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleCondItem[] getHOPDwellScheduledItems();
  
  
  /**
   * Removes the given element from the HOPDwellScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellScheduledItems(entity.HOPDwellScheduleCondItem element);
  
  
  /**
   * Removes the given element from the HOPDwellScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPDwellScheduledItems field.
   */
  public void setHOPDwellScheduledItems(entity.HOPDwellScheduleCondItem[] value);
  
  
  
}