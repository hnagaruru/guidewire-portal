package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleExcl.eti;HOPDwellingScheduleExcl.eix;HOPDwellingScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingScheduleExclInternal extends com.guidewire._generated.entity.HOPDwellingExclInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the HOPDwellScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellScheduledItems(entity.HOPDwellScheduleExclItem element);
  
  
  /**
   * Gets the value of the HOPDwellScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleExclItem[] getHOPDwellScheduledItems();
  
  
  /**
   * Removes the given element from the HOPDwellScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellScheduledItems(entity.HOPDwellScheduleExclItem element);
  
  
  /**
   * Removes the given element from the HOPDwellScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPDwellScheduledItems field.
   */
  public void setHOPDwellScheduledItems(entity.HOPDwellScheduleExclItem[] value);
  
  
  
}