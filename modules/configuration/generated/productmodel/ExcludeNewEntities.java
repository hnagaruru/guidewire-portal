package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeNewEntities.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeNewEntities extends entity.GeneralLiabilityExcl {
  protected ExcludeNewEntities()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeNewEntities(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeNewEntities");
  }
  
  public ExcludeNewEntities(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeNewEntities");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeNewEntitiesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeNewEntities>() {
      public productmodel.ExcludeNewEntities newEmptyInstance() {
        return new productmodel.ExcludeNewEntities();
      }
      
      
    });
  }
}