package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLAddInjuryLeasedWorkers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLAddInjuryLeasedWorkers extends entity.GeneralLiabilityCov {
  protected GLAddInjuryLeasedWorkers()  {
    super((java.lang.Void)null);
  }
  
  public GLAddInjuryLeasedWorkers(entity.PolicyPeriod branch)  {
    super(branch, "GLAddInjuryLeasedWorkers");
  }
  
  public GLAddInjuryLeasedWorkers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLAddInjuryLeasedWorkers");
  }
  
  static {
    com.guidewire._generated.productmodel.GLAddInjuryLeasedWorkersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLAddInjuryLeasedWorkers>() {
      public productmodel.GLAddInjuryLeasedWorkers newEmptyInstance() {
        return new productmodel.GLAddInjuryLeasedWorkers();
      }
      
      
    });
  }
}