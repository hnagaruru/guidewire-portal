package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIProgramChangeCedingWorkItem.eti;RIProgramChangeCedingWorkItem.eix;RIProgramChangeCedingWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIProgramChangeCedingWorkItemInternal extends com.guidewire._generated.entity.RIPolicyPeriodCedingWorkItemInternal {
  /**
   * Adds the given element to the ChangedPrograms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToChangedPrograms(entity.RICedingProgramChange element);
  
  
  /**
   * Gets the value of the ChangedPrograms field.
   * Set of RIPrograms changed that caused this work item to be created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RICedingProgramChange[] getChangedPrograms();
  
  
  /**
   * Removes the given element from the ChangedPrograms array. This is achieved by marking the element for removal.
   */
  public void removeFromChangedPrograms(entity.RICedingProgramChange element);
  
  
  /**
   * Removes the given element from the ChangedPrograms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromChangedPrograms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ChangedPrograms field.
   */
  public void setChangedPrograms(entity.RICedingProgramChange[] value);
  
  
  
}