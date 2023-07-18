package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPY2KPremOnlyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPY2KPremOnlyCov extends entity.BusinessOwnersCov {
  protected BOPY2KPremOnlyCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPY2KPremOnlyCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPY2KPremOnlyCov");
  }
  
  public BOPY2KPremOnlyCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPY2KPremOnlyCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPY2KPremOnlyCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPY2KPremOnlyCov>() {
      public productmodel.BOPY2KPremOnlyCov newEmptyInstance() {
        return new productmodel.BOPY2KPremOnlyCov();
      }
      
      
    });
  }
}