package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPY2KLimitedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPY2KLimitedCov extends entity.BusinessOwnersCov {
  protected BOPY2KLimitedCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPY2KLimitedCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPY2KLimitedCov");
  }
  
  public BOPY2KLimitedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPY2KLimitedCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPY2KLimitedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPY2KLimitedCov>() {
      public productmodel.BOPY2KLimitedCov newEmptyInstance() {
        return new productmodel.BOPY2KLimitedCov();
      }
      
      
    });
  }
}