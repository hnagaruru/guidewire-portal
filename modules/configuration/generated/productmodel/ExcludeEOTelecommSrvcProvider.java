package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeEOTelecommSrvcProvider.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeEOTelecommSrvcProvider extends entity.GeneralLiabilityExcl {
  protected ExcludeEOTelecommSrvcProvider()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeEOTelecommSrvcProvider(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeEOTelecommSrvcProvider");
  }
  
  public ExcludeEOTelecommSrvcProvider(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeEOTelecommSrvcProvider");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeEOTelecommSrvcProviderInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeEOTelecommSrvcProvider>() {
      public productmodel.ExcludeEOTelecommSrvcProvider newEmptyInstance() {
        return new productmodel.ExcludeEOTelecommSrvcProvider();
      }
      
      
    });
  }
}