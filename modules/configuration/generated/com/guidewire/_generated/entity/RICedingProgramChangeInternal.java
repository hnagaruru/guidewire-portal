package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICedingProgramChange.eti;RICedingProgramChange.eix;RICedingProgramChange.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICedingProgramChangeInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Program field.
   * Program that changed to create the related work item.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  public gw.pl.persistence.core.Key getProgramID();
  
  
  /**
   * Gets the value of the WorkItem field.
   * WorkItem that owns this program change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgramChangeCedingWorkItem getWorkItem();
  
  
  public gw.pl.persistence.core.Key getWorkItemID();
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  public void setProgramID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WorkItem field.
   */
  public void setWorkItem(entity.RIProgramChangeCedingWorkItem value);
  
  
  public void setWorkItemID(gw.pl.persistence.core.Key value);
  
  
  
}