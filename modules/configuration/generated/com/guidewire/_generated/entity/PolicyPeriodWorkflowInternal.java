package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriodWorkflow.eti;PolicyPeriodWorkflow.eix;PolicyPeriodWorkflow.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyPeriodWorkflowInternal extends com.guidewire._generated.entity.WorkflowInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODWORKFLOWADDED_EVENT = "PolicyPeriodWorkflowAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODWORKFLOWCHANGED_EVENT = "PolicyPeriodWorkflowChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODWORKFLOWREMOVED_EVENT = "PolicyPeriodWorkflowRemoved";
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The PolicyPeriod with which this workflow is associated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the Processing field.
   * Indicate whether the workflow is currently processing an operation.  Use in the workflow script to             indicate when an operation starts and when it ends.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isProcessing();
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Processing field.
   */
  public void setProcessing(java.lang.Boolean value);
  
  
  
}