package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLAmendLiquorLiability.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLAmendLiquorLiability extends entity.GeneralLiabilityCond {
  protected GLAmendLiquorLiability()  {
    super((java.lang.Void)null);
  }
  
  public GLAmendLiquorLiability(entity.PolicyPeriod branch)  {
    super(branch, "GLAmendLiquorLiability");
  }
  
  public GLAmendLiquorLiability(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLAmendLiquorLiability");
  }
  
  static {
    com.guidewire._generated.productmodel.GLAmendLiquorLiabilityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLAmendLiquorLiability>() {
      public productmodel.GLAmendLiquorLiability newEmptyInstance() {
        return new productmodel.GLAmendLiquorLiability();
      }
      
      
    });
  }
}