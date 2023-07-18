package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Rewrite.eti;Rewrite.eix;Rewrite.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RewriteInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.RewritePublicMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REWRITEADDED_EVENT = "RewriteAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REWRITECHANGED_EVENT = "RewriteChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REWRITEREMOVED_EVENT = "RewriteRemoved";
  
  /**
   * Gets the value of the RewriteType field.
   * Type of rewrite
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RewriteType getRewriteType();
  
  
  /**
   * Gets the value of the ChangePolicyNumber field.
   * Whether or not a new policy number should be generated for the rewritten policy upon issuance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChangePolicyNumber();
  
  
  /**
   * Sets the value of the ChangePolicyNumber field.
   */
  public void setChangePolicyNumber(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RewriteType field.
   */
  public void setRewriteType(typekey.RewriteType value);
  
  
  
}