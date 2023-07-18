package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProducts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProducts extends entity.GeneralLiabilityExcl {
  protected ExcludeProducts()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProducts(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProducts");
  }
  
  public ExcludeProducts(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProducts");
  }
  
  public productmodel.GenericExcludedProductType getExcludedProductTerm() {
    return (productmodel.GenericExcludedProductType)getCovTerm("ExcludedProduct");
  }
  
  public boolean getHasExcludedProductTerm() {
    return hasCovTerm("ExcludedProduct");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProductsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProducts>() {
      public productmodel.ExcludeProducts newEmptyInstance() {
        return new productmodel.ExcludeProducts();
      }
      
      
    });
  }
}