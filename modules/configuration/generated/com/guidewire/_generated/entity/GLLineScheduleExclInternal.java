package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleExcl.eti;GLLineScheduleExcl.eix;GLLineScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLLineScheduleExclInternal extends com.guidewire._generated.entity.GeneralLiabilityExclInternal, com.guidewire._generated.entity.ScheduleAutoNumberSequenceInternal, gw.api.domain.Schedule {
  /**
   * Adds the given element to the GLLineScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLLineScheduledItems(entity.GLLineScheduleExclItem element);
  
  
  /**
   * Gets the value of the GLLineScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLLineScheduleExclItem[] getGLLineScheduledItems();
  
  
  /**
   * Removes the given element from the GLLineScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromGLLineScheduledItems(entity.GLLineScheduleExclItem element);
  
  
  /**
   * Removes the given element from the GLLineScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLLineScheduledItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the GLLineScheduledItems field.
   */
  public void setGLLineScheduledItems(entity.GLLineScheduleExclItem[] value);
  
  
  
}