package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFoundationWaterDamage.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFoundationWaterDamage extends entity.HOPDwellingCov {
  protected HOPFoundationWaterDamage()  {
    super((java.lang.Void)null);
  }
  
  public HOPFoundationWaterDamage(entity.PolicyPeriod branch)  {
    super(branch, "zr3jqmau1bned1g0oe6pqhu7ct8");
  }
  
  public HOPFoundationWaterDamage(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zr3jqmau1bned1g0oe6pqhu7ct8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFoundationWaterDamageInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFoundationWaterDamage>() {
      public productmodel.HOPFoundationWaterDamage newEmptyInstance() {
        return new productmodel.HOPFoundationWaterDamage();
      }
      
      
    });
  }
}