package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeEOInternetSrvProvider.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeEOInternetSrvProvider extends entity.GeneralLiabilityExcl {
  protected ExcludeEOInternetSrvProvider()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeEOInternetSrvProvider(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeEOInternetSrvProvider");
  }
  
  public ExcludeEOInternetSrvProvider(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeEOInternetSrvProvider");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeEOInternetSrvProviderInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeEOInternetSrvProvider>() {
      public productmodel.ExcludeEOInternetSrvProvider newEmptyInstance() {
        return new productmodel.ExcludeEOInternetSrvProvider();
      }
      
      
    });
  }
}