package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLContractLiabilityLimitation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLContractLiabilityLimitation extends entity.GeneralLiabilityCond {
  protected GLContractLiabilityLimitation()  {
    super((java.lang.Void)null);
  }
  
  public GLContractLiabilityLimitation(entity.PolicyPeriod branch)  {
    super(branch, "GLContractLiabilityLimitation");
  }
  
  public GLContractLiabilityLimitation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLContractLiabilityLimitation");
  }
  
  static {
    com.guidewire._generated.productmodel.GLContractLiabilityLimitationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLContractLiabilityLimitation>() {
      public productmodel.GLContractLiabilityLimitation newEmptyInstance() {
        return new productmodel.GLContractLiabilityLimitation();
      }
      
      
    });
  }
}