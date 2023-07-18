package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProgramTreaty.eti;ProgramTreaty.eix;ProgramTreaty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProgramTreatyInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PROGRAMTREATYADDED_EVENT = "ProgramTreatyAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PROGRAMTREATYCHANGED_EVENT = "ProgramTreatyChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PROGRAMTREATYREMOVED_EVENT = "ProgramTreatyRemoved";
  
  /**
   * Gets the value of the Program field.
   * Associated program.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  public gw.pl.persistence.core.Key getProgramID();
  
  
  /**
   * Gets the value of the Treaty field.
   * Associated agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getTreaty();
  
  
  public gw.pl.persistence.core.Key getTreatyID();
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  public void setProgramID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Treaty field.
   */
  public void setTreaty(entity.RIAgreement value);
  
  
  public void setTreatyID(gw.pl.persistence.core.Key value);
  
  
  
}