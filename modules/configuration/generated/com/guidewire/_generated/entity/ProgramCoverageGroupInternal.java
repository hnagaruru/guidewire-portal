package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProgramCoverageGroup.eti;ProgramCoverageGroup.eix;ProgramCoverageGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProgramCoverageGroupInternal extends com.guidewire._generated.entity.RICoverageGroupInternal {
  /**
   * Gets the value of the Program field.
   * The reinsurance program this coverage group belong to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  public gw.pl.persistence.core.Key getProgramID();
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  public void setProgramID(gw.pl.persistence.core.Key value);
  
  
  
}