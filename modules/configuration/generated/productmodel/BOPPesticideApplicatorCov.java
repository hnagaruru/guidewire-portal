package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPesticideApplicatorCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPesticideApplicatorCov extends entity.BusinessOwnersCov {
  protected BOPPesticideApplicatorCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPesticideApplicatorCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPesticideApplicatorCov");
  }
  
  public BOPPesticideApplicatorCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPesticideApplicatorCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPesticideApplicatorCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPesticideApplicatorCov>() {
      public productmodel.BOPPesticideApplicatorCov newEmptyInstance() {
        return new productmodel.BOPPesticideApplicatorCov();
      }
      
      
    });
  }
}