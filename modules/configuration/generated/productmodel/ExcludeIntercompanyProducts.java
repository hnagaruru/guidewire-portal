package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeIntercompanyProducts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeIntercompanyProducts extends entity.GeneralLiabilityExcl {
  protected ExcludeIntercompanyProducts()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeIntercompanyProducts(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeIntercompanyProducts");
  }
  
  public ExcludeIntercompanyProducts(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeIntercompanyProducts");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeIntercompanyProductsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeIntercompanyProducts>() {
      public productmodel.ExcludeIntercompanyProducts newEmptyInstance() {
        return new productmodel.ExcludeIntercompanyProducts();
      }
      
      
    });
  }
}