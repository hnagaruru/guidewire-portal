package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLeasedWorkerInjCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLeasedWorkerInjCov extends entity.BusinessOwnersCov {
  protected BOPLeasedWorkerInjCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPLeasedWorkerInjCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPLeasedWorkerInjCov");
  }
  
  public BOPLeasedWorkerInjCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLeasedWorkerInjCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLeasedWorkerInjCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLeasedWorkerInjCov>() {
      public productmodel.BOPLeasedWorkerInjCov newEmptyInstance() {
        return new productmodel.BOPLeasedWorkerInjCov();
      }
      
      
    });
  }
}