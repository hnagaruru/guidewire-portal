package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeFiduciaryLiab.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeFiduciaryLiab extends entity.GeneralLiabilityExcl {
  protected ExcludeFiduciaryLiab()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeFiduciaryLiab(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeFiduciaryLiab");
  }
  
  public ExcludeFiduciaryLiab(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeFiduciaryLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeFiduciaryLiabInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeFiduciaryLiab>() {
      public productmodel.ExcludeFiduciaryLiab newEmptyInstance() {
        return new productmodel.ExcludeFiduciaryLiab();
      }
      
      
    });
  }
}