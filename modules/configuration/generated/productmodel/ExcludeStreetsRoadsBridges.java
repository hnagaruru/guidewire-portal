package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeStreetsRoadsBridges.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeStreetsRoadsBridges extends entity.GeneralLiabilityExcl {
  protected ExcludeStreetsRoadsBridges()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeStreetsRoadsBridges(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeStreetsRoadsBridges");
  }
  
  public ExcludeStreetsRoadsBridges(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeStreetsRoadsBridges");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeStreetsRoadsBridgesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeStreetsRoadsBridges>() {
      public productmodel.ExcludeStreetsRoadsBridges newEmptyInstance() {
        return new productmodel.ExcludeStreetsRoadsBridges();
      }
      
      
    });
  }
}