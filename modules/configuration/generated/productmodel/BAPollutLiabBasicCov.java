package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAPollutLiabBasicCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAPollutLiabBasicCov extends entity.BAStateCov {
  protected BAPollutLiabBasicCov()  {
    super((java.lang.Void)null);
  }
  
  public BAPollutLiabBasicCov(entity.PolicyPeriod branch)  {
    super(branch, "BAPollutLiabBasicCov");
  }
  
  public BAPollutLiabBasicCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAPollutLiabBasicCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BAPollutLiabBasicCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAPollutLiabBasicCov>() {
      public productmodel.BAPollutLiabBasicCov newEmptyInstance() {
        return new productmodel.BAPollutLiabBasicCov();
      }
      
      
    });
  }
}