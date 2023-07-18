package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPMineSubsidenceExclusion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPMineSubsidenceExclusion extends entity.HOPDwellingExcl {
  protected HOPMineSubsidenceExclusion()  {
    super((java.lang.Void)null);
  }
  
  public HOPMineSubsidenceExclusion(entity.PolicyPeriod branch)  {
    super(branch, "zcrj42qr2tgmfbqohsgr92nrpp9");
  }
  
  public HOPMineSubsidenceExclusion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zcrj42qr2tgmfbqohsgr92nrpp9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPMineSubsidenceExclusionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPMineSubsidenceExclusion>() {
      public productmodel.HOPMineSubsidenceExclusion newEmptyInstance() {
        return new productmodel.HOPMineSubsidenceExclusion();
      }
      
      
    });
  }
}