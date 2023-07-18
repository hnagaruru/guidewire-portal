package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Reinstatement.eti;Reinstatement.eix;Reinstatement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReinstatementInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.ReinstatementPublicMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REINSTATEMENTADDED_EVENT = "ReinstatementAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REINSTATEMENTCHANGED_EVENT = "ReinstatementChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REINSTATEMENTREMOVED_EVENT = "ReinstatementRemoved";
  
  /**
   * Gets the value of the ReinstateCode field.
   * Reinstate reason codes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReinstateCode getReinstateCode();
  
  
  /**
   * Sets the value of the ReinstateCode field.
   */
  public void setReinstateCode(typekey.ReinstateCode value);
  
  
  
}