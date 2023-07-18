package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitPersPropertyAtOtherResidencesItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPIncLimitPersPropertyAtOtherResidencesItem extends entity.HOPDwellSchCovItemCov {
  protected HOPIncLimitPersPropertyAtOtherResidencesItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPIncLimitPersPropertyAtOtherResidencesItem(entity.PolicyPeriod branch)  {
    super(branch, "zm8igrhpt3bfg2lvdnl5lf0iat9");
  }
  
  public HOPIncLimitPersPropertyAtOtherResidencesItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zm8igrhpt3bfg2lvdnl5lf0iat9");
  }
  
  public productmodel.DirectHOPIncLimitPersPropertyAtOtherResidencesItemLimitType getHOPIncLimitPersPropertyAtOtherResidencesItemLimitTerm() {
    return (productmodel.DirectHOPIncLimitPersPropertyAtOtherResidencesItemLimitType)getCovTerm("zbnhu6nt78onmd8kecdg4st4vi8");
  }
  
  public boolean getHasHOPIncLimitPersPropertyAtOtherResidencesItemLimitTerm() {
    return hasCovTerm("zbnhu6nt78onmd8kecdg4st4vi8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPIncLimitPersPropertyAtOtherResidencesItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPIncLimitPersPropertyAtOtherResidencesItem>() {
      public productmodel.HOPIncLimitPersPropertyAtOtherResidencesItem newEmptyInstance() {
        return new productmodel.HOPIncLimitPersPropertyAtOtherResidencesItem();
      }
      
      
    });
  }
}