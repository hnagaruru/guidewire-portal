package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCosmeticDamageExclusion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCosmeticDamageExclusion extends entity.HOPDwellingExcl {
  protected HOPCosmeticDamageExclusion()  {
    super((java.lang.Void)null);
  }
  
  public HOPCosmeticDamageExclusion(entity.PolicyPeriod branch)  {
    super(branch, "z5cisimhgo3869grkj5kijck6n8");
  }
  
  public HOPCosmeticDamageExclusion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z5cisimhgo3869grkj5kijck6n8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCosmeticDamageExclusionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCosmeticDamageExclusion>() {
      public productmodel.HOPCosmeticDamageExclusion newEmptyInstance() {
        return new productmodel.HOPCosmeticDamageExclusion();
      }
      
      
    });
  }
}