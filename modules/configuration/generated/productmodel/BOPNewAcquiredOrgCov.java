package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPNewAcquiredOrgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPNewAcquiredOrgCov extends entity.BusinessOwnersCov {
  protected BOPNewAcquiredOrgCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPNewAcquiredOrgCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPNewAcquiredOrgCov");
  }
  
  public BOPNewAcquiredOrgCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPNewAcquiredOrgCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPNewAcquiredOrgCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPNewAcquiredOrgCov>() {
      public productmodel.BOPNewAcquiredOrgCov newEmptyInstance() {
        return new productmodel.BOPNewAcquiredOrgCov();
      }
      
      
    });
  }
}