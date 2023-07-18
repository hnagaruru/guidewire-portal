package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeUGResourcesEquip.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeUGResourcesEquip extends entity.GeneralLiabilityExcl {
  protected ExcludeUGResourcesEquip()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeUGResourcesEquip(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeUGResourcesEquip");
  }
  
  public ExcludeUGResourcesEquip(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeUGResourcesEquip");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeUGResourcesEquipInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeUGResourcesEquip>() {
      public productmodel.ExcludeUGResourcesEquip newEmptyInstance() {
        return new productmodel.ExcludeUGResourcesEquip();
      }
      
      
    });
  }
}