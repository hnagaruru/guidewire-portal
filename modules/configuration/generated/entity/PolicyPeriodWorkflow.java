package entity;

/**
 * PolicyPeriodWorkflow
 * Workflows for PolicyPeriods
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriodWorkflow.eti;PolicyPeriodWorkflow.eix;PolicyPeriodWorkflow.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PolicyPeriodWorkflow extends entity.Workflow implements entity.Extractable, entity.FrozenSetMember, entity.EventAware {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyPeriodWorkflow> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyPeriodWorkflow>("entity.PolicyPeriodWorkflow");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROCESSING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Processing");
  
  public static final java.lang.String POLICYPERIODWORKFLOWADDED_EVENT = "PolicyPeriodWorkflowAdded";
  
  public static final java.lang.String POLICYPERIODWORKFLOWCHANGED_EVENT = "PolicyPeriodWorkflowChanged";
  
  public static final java.lang.String POLICYPERIODWORKFLOWREMOVED_EVENT = "PolicyPeriodWorkflowRemoved";
  
  protected PolicyPeriodWorkflow(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PolicyPeriodWorkflowInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PolicyPeriodWorkflowInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PolicyPeriodWorkflowInternal)super.__getInternalInterface();
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Just a shortcut for "getPolicyPeriod().getJob()", plus some null checking
   * @return the job of the referenced policy period
   */
  public entity.Job getJob() {
    return ((com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods")).getJob();
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The PolicyPeriod with which this workflow is associated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
  }
  
  /**
   * Initialize the specified activity.  This is a helper method for PolicyPeriod workflows.
   * This sets the defaults for the activity:
   * -open status
   * -the job of the activity is from the policy period
   * -the account is from the policy.
   * @param activity the activity to initialize.
   */
  public void initActivity(entity.Activity activity) {
    ((com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods")).initActivity(activity);
  }
  
  /**
   * Gets the value of the Processing field.
   * Indicate whether the workflow is currently processing an operation.  Use in the workflow script to             indicate when an operation starts and when it ends.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isProcessing() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PROCESSING_PROP.get());
  }
  
  /**
   * Reloads the workflow in its current bundle.
   * @return PolicyPeriodWorkflow refreshed instance of this workflow
   */
  public entity.PolicyPeriodWorkflow refreshWorkflow() {
    return ((com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.workflow.PolicyPeriodWorkflowPublicMethods")).refreshWorkflow();
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Processing field.
   */
  public void setProcessing(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PROCESSING_PROP.get(), value);
  }
  
  static {
    com.guidewire._generated.entity.PolicyPeriodWorkflowInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PolicyPeriodWorkflow, com.guidewire._generated.entity.PolicyPeriodWorkflowInternal>() {
      public java.lang.Object getImplementation(entity.PolicyPeriodWorkflow bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyPeriodWorkflowInternal getInternalInterface(entity.PolicyPeriodWorkflow bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}